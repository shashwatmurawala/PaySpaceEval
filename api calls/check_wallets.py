from blockcypher import list_wallet_names

def list_wallets(api_token):
    try:
        # List wallet names using BlockCypher API
        result = list_wallet_names(api_token, coin_symbol='bcy')

        # Check if 'wallet_names' is present in the response
        if 'wallet_names' in result:
            # Print the wallet names
            print("Wallet Names:", result["wallet_names"])
        else:
            print("Error listing wallets. Response:", result)

    except Exception as e:
        print("Error listing wallets:", str(e))

# Replace this value with your actual API token
blockcypher_api_token = 'b07f0c5d691446b29ed9cf7f22dbfa3a'

# Call the function to list wallets
list_wallets(blockcypher_api_token)
