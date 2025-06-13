import os
import datetime
import logging
import shutil
import time
from collections import defaultdict
import platform
import subprocess

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Define binary file extensions
BINARY_EXTENSIONS = ('.bin', '.exe', '.dll', '.so', '.o', '.class', '.jar', '.zip', '.rar', '.7z',
                     '.gz', '.bz2', '.xz', '.png', '.jpg', '.jpeg', '.gif', '.bmp', '.ico',
                     '.mp3', '.wav', '.mp4', '.avi', '.mov', '.pdf', '.doc', '.docx', '.xls',
                     '.xlsx', '.ppt', '.pptx', '.db', '.sqlite', '.mdb', '.dat', '.idx',
                     '.woff', '.woff2', '.ttf', '.otf', '.eot')

# Define cache and trash files/directories
IGNORE_ITEMS = ('.pyc', '__pycache__', 'Thumbs.db', 'desktop.ini', '.DS_Store', '$RECYCLE.BIN',
                '*.log', '*.bak', '*.tmp', '*.swp', '*.swo')

def is_binary_file(filepath):
    """Checks if a file is likely binary based on its extension or by trying to decode."""
    _, ext = os.path.splitext(filepath)
    if ext.lower() in BINARY_EXTENSIONS:
        return True
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            f.read(512)
        return False  # If it can be read as text, it's not binary
    except UnicodeDecodeError:
        return True  # If it cannot be decoded, it's likely binary
    except Exception:
        return False # If it cannot be opened for other reasons, assume its not binary

def is_ignored_item(item):
    """Checks if the item should be ignored based on IGNORE_ITEMS."""
    if item in IGNORE_ITEMS:
        return True
    for pattern in IGNORE_ITEMS:
        if '*' in pattern and item.endswith(pattern.replace('*','')):
            return True
    return False


def create_file_structure_and_content(root_dir, output_file):
    """
    Traverses a directory structure, creates a text file representing the structure,
    and includes the content of each file within that structure.
    Handles edge cases and logging.
    """
    start_time = time.time()  # To measure the time taken
    stats = defaultdict(int)  # To collect stats

    try:
        with open(output_file, 'w', encoding='utf-8') as outfile:
            outfile.write(f"File Structure and Content Report\n")
            outfile.write(f"Generated on: {datetime.datetime.now()}\n\n")

            def traverse_directory(directory, indent=""):
                """Recursively traverses the directory and writes to the output file."""
                try:
                    logging.debug(f"Processing directory: {directory}")
                    items = os.listdir(directory)
                    for item in items:
                        item_path = os.path.join(directory, item)
                        if is_ignored_item(item):
                            logging.debug(f"Ignoring item: {item_path}")
                            stats['ignored'] += 1
                            continue
                        try:
                            if os.path.islink(item_path):
                                outfile.write(f"{indent}- {item} (symlink)\n")
                                logging.info(f"Skipping symlink: {item_path}")
                                stats['symlinks'] += 1
                                continue
                            elif os.path.isdir(item_path):
                                outfile.write(f"{indent}- {item}\n")
                                stats['directories'] += 1
                                traverse_directory(item_path, indent + "  ")
                            elif os.path.isfile(item_path):
                                outfile.write(f"{indent}- {item}\n")
                                stats['files'] += 1
                                if is_binary_file(item_path):
                                    outfile.write(f"{indent}  [BINARY FILE - CONTENT SKIPPED]\n")
                                    logging.info(f"Skipping binary file: {item_path}")
                                    stats['binary_files'] += 1
                                else:
                                    try:
                                        with open(item_path, 'r', encoding='utf-8') as infile:
                                            content = infile.read()
                                            outfile.write(f"{indent}  [FILE CONTENT START]\n")
                                            outfile.write(content)
                                            outfile.write(f"\n{indent}  [FILE CONTENT END]\n")
                                            logging.debug(f"Successfully read file: {item_path}")
                                            stats['text_files'] += 1
                                    except UnicodeDecodeError:
                                        outfile.write(f"{indent}  [ERROR READING FILE]: UnicodeDecodeError - Could not read as UTF-8\n")
                                        logging.warning(f"UnicodeDecodeError for file: {item_path}")
                                        stats['unicode_errors'] += 1
                                    except Exception as e:
                                        outfile.write(f"{indent}  [ERROR READING FILE]: {e}\n")
                                        logging.error(f"Error reading file: {item_path} - {e}")
                                        stats['read_errors'] += 1
                            else:
                                outfile.write(f"{indent}- {item} (unknown type)\n")
                                logging.warning(f"Skipping unknown type item: {item_path}")
                                stats['unknown_types'] += 1
                        except Exception as e:
                            outfile.write(f"{indent}  [ERROR PROCESSING ITEM]: {item} - {e}\n")
                            logging.error(f"Error processing item: {item_path} - {e}")
                            stats['item_errors'] += 1

                except Exception as e:
                    outfile.write(f"{indent}  [ERROR ACCESSING DIRECTORY]: {directory} - {e}\n")
                    logging.error(f"Error accessing directory: {directory} - {e}")
                    stats['directory_errors'] += 1
            
            traverse_directory(root_dir)

    except Exception as e:
        logging.error(f"An unexpected error occurred during processing: {e}")
        print(f"An error occurred: {e}. Check the logs for more details.")

    end_time = time.time()
    elapsed_time = end_time - start_time
    print_stats(stats, elapsed_time)


def print_stats(stats, elapsed_time):
    """Prints a summary of the process to the console."""
    print("\n--- Processing Summary ---")
    print(f"  Total time taken: {elapsed_time:.2f} seconds")
    print(f"  Directories processed: {stats['directories']}")
    print(f"  Files processed: {stats['files']}")
    print(f"    - Text files read: {stats['text_files']}")
    print(f"    - Binary files skipped: {stats['binary_files']}")
    print(f"  Symlinks skipped: {stats['symlinks']}")
    print(f"  Ignored items: {stats['ignored']}")
    print(f"  Unknown types skipped: {stats['unknown_types']}")
    if stats['unicode_errors'] > 0 or stats['read_errors'] > 0 or stats['item_errors'] > 0 or stats['directory_errors'] > 0:
        print("\n--- Errors ---")
        print(f"  Unicode decode errors: {stats['unicode_errors']}")
        print(f"  File read errors: {stats['read_errors']}")
        print(f"  Item processing errors: {stats['item_errors']}")
        print(f"  Directory access errors: {stats['directory_errors']}")
    else:
        print("\n--- No Errors ---")
    print("-----------------------\n")

def check_git_lfs():
    """Checks if Git LFS is installed."""
    try:
        result = subprocess.run(['git', 'lfs', 'version'], capture_output=True, text=True, check=True)
        if 'git-lfs/' in result.stdout:
            logging.info("Git LFS is installed.")
            return True
        else:
             logging.warning("Git LFS is not installed or not detected correctly.")
             return False
    except (subprocess.CalledProcessError, FileNotFoundError):
        logging.warning("Git LFS is not installed or not found in path.")
        return False

def check_os():
    """Checks OS and provides guidance."""
    os_name = platform.system()
    if os_name == "Windows":
        logging.info("Operating System: Windows")
    elif os_name == "Linux":
        logging.info("Operating System: Linux")
    elif os_name == "Darwin":
       logging.info("Operating System: macOS")
    else:
        logging.warning(f"Operating System: {os_name} - Please check for known issues")

def handle_large_repo(root_dir):
    """Handles large repositories by checking Git LFS."""
    if check_git_lfs():
        logging.info("Git LFS is installed, large files will be handled.")
    else:
        logging.warning("Git LFS is not installed, large files may not be handled correctly.")
        print("Warning: Git LFS is not installed, large files may not be handled correctly.")
        print("Install Git LFS to ensure large files are processed correctly.")


if __name__ == "__main__":
    # Check OS
    check_os()
    
    # Get the directory where the script is located
    root_directory = os.path.dirname(os.path.abspath(__file__))
    output_filename = "project_structure_and_content.txt"

    # Handle large repos
    handle_large_repo(root_directory)
    
    if not os.path.isdir(root_directory):
        logging.error("The script's directory is not a valid directory.")
        print("Error: The script's directory is not a valid directory.")
    else:
        try:
            create_file_structure_and_content(root_directory, output_filename)
            logging.info(f"File structure and content written to: {output_filename}")
            print(f"File structure and content written to: {output_filename}")
        except Exception as e:
            logging.error(f"Failed to complete file structure and content: {e}")
            print(f"Error while generating file structure and content, check logs for more details.")