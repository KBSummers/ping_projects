# Data Visualization for Google Analytics

## Objective

The objective of this project is to help to generate graphical representations for Google Analytics metrics. In order to do so, we utilize the Google Analytics API with calls through the Python script provided in this repository. Currently, the script visualizes website traffic in terms off sessions in the last 7 days, but more metrics will be implemented to follow.

## Getting Started

### Enabling API Services

In order to begin using this project, you will first need to enable to Google Analytics API.


In order to Enable to API, you will either need to sign in to your [Google Developer Console](https://console.cloud.google.com) and either begin a new project, or select and existing one. Now, in your dashboard, select 'Enable APIs and Services', and select 'Google Analytics API'. 

Now create service account credentials and download the corresponding JSON key file, and note the associated email address within the file, as this will be used to authenticate API interactions.

Once you have the email held within your credentials JSON file, in your Google Analytics dashboard go to  Google Analytics > Admin > View > User Management and add a user with the email from your file and give it administrative rights. 


You will also need to to add you [Google Analytics Tracking Code](https://chartio.com/learn/marketing-analytics/how-to-add-google-analytics-tracking-to-a-website/) to your website in order to track metrics.
### Install Required Python Libraries

First ensure that you have Python 3.6 or a newer version installed on your system. Then ensure that these libraries are installed:

```
pip install google-auth google-auth-oauthlib google-auth-httplib2 google-api-python-client matplotlib
```
## Usage

In order to use the script provided, first ensure that you have completed all the steps provided in the Getting Started section.

Now, to run the program, you will need to provide the path to your .json credentials file provided by Google Analytics. You will also need to provide your View ID, which can be found in your Google Dashboard at Google Analytics > Admin > View > View Settings.

Now in the python script, make sure to edit the lines that contain 'YOUR_VIEW_ID' with the value of your view ID and 'your_credentials.json' with the path to your json credentials relative to where this program is held. 

*NOTE*: Command line argument support coming soon, so editing will not be necessary.

Now once, all the preceding steps have been followed, to run the program simply enter
```
$ python3 generate.py
```
in your command line (or whatever environment you choose to run python in).
