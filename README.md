## Hack2Hire

# Introduction

This project is basically about converting documents/pdfs/handwritten files related to invoices, receipts etc.
into some or the other sort of data(as per user's requirement) that is much more readable and contains only the 
information that has been asked by the user(in this case the enterprise or the company).
The history of invoices and receipts has been really complex as it contains manual work and considerable amount of accuracy
which for a fact is too much to ask for in modern times, so here we made this application that cuts off the manual work
and exhibits almost flawless process of storing data.

# Requirements
None! Just browse and enjoy :)

# Basic functioning
1) Import an scanned document or file to your solution.
2) Identify the data items you want to extract(Invoice no, email, phone number, address).
3) Extract the line-item data grid.
4) Set up the parsing rules by selecting the data you need.
5) Your extracted data is ready to be downloaded from your API or as files.


# Main Features
1) Creates and stores structured data in a more readable format.
2) Configures the watermark and avoids scanning it. 
3) Different type of file formats can be scanned.


# BUILT WITH
Heroku - backend deployment

# Backend Libraries

certifi==2021.10.8
charset-normalizer==2.0.6
click==8.0.2
colorama==0.4.4
dnspython==1.16.0
Flask==2.0.2
Flask-Cors==3.0.10
Flask-PyMongo==2.3.0
Flask-UUID==0.2
gunicorn==20.1.0
idna==3.2
itsdangerous==2.0.1
Jinja2==3.0.2
MarkupSafe==2.0.1
pymongo==3.12.0
python-dotenv==0.19.1
requests==2.26.0
six==1.16.0
urllib3==1.26.7
veryfi==2.1.0
Werkzeug==2.0.2
