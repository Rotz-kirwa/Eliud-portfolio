from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)

# Email configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.environ.get('EMAIL_USER')
app.config['MAIL_PASSWORD'] = os.environ.get('EMAIL_PASS')

mail = Mail(app)

@app.route('/api/contact', methods=['POST'])
def contact():
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'email', 'subject', 'message']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'error': f'{field} is required'}), 400
        
        # Create email message
        msg = Message(
            subject=f"Portfolio Contact: {data['subject']}",
            sender=app.config['MAIL_USERNAME'],
            recipients=['eliudkirwa452@gmail.com']
        )
        
        msg.body = f"""
        New contact form submission:
        
        Name: {data['name']}
        Email: {data['email']}
        Subject: {data['subject']}
        
        Message:
        {data['message']}
        
        Sent at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
        """
        
        # Send email
        mail.send(msg)
        
        return jsonify({'message': 'Email sent successfully'}), 200
        
    except Exception as e:
        return jsonify({'error': 'Failed to send email'}), 500

@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({'status': 'healthy'}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)