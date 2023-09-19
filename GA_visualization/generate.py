import pandas as pd
from google.oauth2 import service_account
from googleapiclient.discovery import build
import matplotlib.pyplot as plt

# Replace with your own Google Analytics credentials JSON file
KEY_FILE_LOCATION = 'your_credentials.json'

# Authenticate with Google Analytics API
def initialize_analyticsreporting():
    credentials = service_account.Credentials.from_service_account_file(
        KEY_FILE_LOCATION, scopes=['https://www.googleapis.com/auth/analytics.readonly']
    )

    analytics = build('analyticsreporting', 'v4', credentials=credentials)

    return analytics

# Query Google Analytics for data
def get_report(analytics):
    return analytics.reports().batchGet(
        body={
            'reportRequests': [
                {
                    'viewId': 'YOUR_VIEW_ID',
                    'dateRanges': [{'startDate': '7daysAgo', 'endDate': 'today'}],
                    'metrics': [{'expression': 'ga:sessions'}],
                    'dimensions': [{'name': 'ga:date'}]
                }
            ]
        }
    ).execute()

# Parse and visualize data
def parse_data(response):
    data = response['reports'][0]['data']['rows']

    df = pd.DataFrame(data, columns=['Date', 'Sessions'])
    df['Date'] = pd.to_datetime(df['Date'], format='%Y%m%d')

    # Plot the data
    plt.figure(figsize=(10, 6))
    plt.plot(df['Date'], df['Sessions'], marker='o', linestyle='-')
    plt.title('Website Sessions Over the Last 7 Days')
    plt.xlabel('Date')
    plt.ylabel('Sessions')
    plt.grid(True)

    plt.show()

def main():
    analytics = initialize_analyticsreporting()
    response = get_report(analytics)
    parse_data(response)

if __name__ == '__main__':
    main()

