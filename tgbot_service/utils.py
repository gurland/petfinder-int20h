def extract_random_id(text):
    # Extracts the unique random_id from the sent deep-linked /start command.
    return text.split()[1] if len(text.split()) > 1 else None
