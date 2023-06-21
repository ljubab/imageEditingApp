from flask import Flask, jsonify, request, send_file
import imgEditing
from io import BytesIO
from wand.image import Image

app = Flask(__name__)

@app.route('/postImage', methods=['POST'])
def postImage():
    if 'img' not in request.files:
        return jsonify({'error': 'image doesn\'t exist'}), 400
    img = request.files['img']

    with Image(file=img) as wand_img:
        if 'blur' in request.form:
            imgEditing.blur(wand_img, float(request.form['blur']))
        if 'rotate' in request.form:
            imgEditing.rotate(wand_img, float(request.form['rotate']))
        if 'edge' in request.form:
            imgEditing.edge(wand_img, float(request.form['edge']))
        if 'grayscale' in request.form:
            if request.form['grayscale'] == 'true':
                imgEditing.grayscale(wand_img)
        
        modified_image_data = BytesIO()
        wand_img.save(modified_image_data)
        modified_image_data.seek(0)
        
        return send_file(modified_image_data, mimetype='image/jpeg'), 200

if __name__ == '__main__':
    app.run()