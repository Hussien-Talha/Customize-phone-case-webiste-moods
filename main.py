from flask import Flask, send_file, request
from io import BytesIO
from PIL import Image
import base64

app = Flask(__name__)

@app.route('/download', methods=['POST'])
def download():
    data = request.form['imageData']
    img_data = base64.b64decode(data.split(',')[1])
    img = Image.open(BytesIO(img_data))

    img_io = BytesIO()
    img.save(img_io, 'PNG')
    img_io.seek(0)

    return send_file(img_io, mimetype='image/png', as_attachment=True, download_name='custom-phone-case.png')

if __name__ == '__main__':
    app.run(debug=True)