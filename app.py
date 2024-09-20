# app.py
from flask import Flask, render_template, request, redirect, url_for
import pandas as pd

app = Flask(__name__)

# Load phone models from Excel sheet
phone_models_df = pd.read_excel('phone_models.xlsx')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/customize', methods=['GET', 'POST'])
def customize():
    phone_models = phone_models_df.to_dict(orient='records')
    return render_template('customize.html', phone_models=phone_models)

@app.route('/checkout', methods=['GET', 'POST'])
def checkout():
    if request.method == 'POST':
        phone_number = request.form['phone-number']
        address = request.form['address']
        # Process the order here (e.g., save to database, send notification)
        return redirect(url_for('thank_you'))
    return render_template('checkout.html')

@app.route('/thank-you')
def thank_you():
    return "<h1>Thank you for your order!</h1>"

if __name__ == '__main__':
    app.run(debug=True)