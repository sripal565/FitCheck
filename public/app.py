from flask import Flask, request, jsonify
import os, random
from rembg import remove
from PIL import Image
from colorthief import ColorThief
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route('/generate-outfit', methods=['POST'])
def generate_outfit():
    #top code

    input_folder = "itops_images"
    output_folder = "otops_images"

    top_dict = {}

    for filename in os.listdir(input_folder):
        if filename.endswith('.jpeg') or filename.endswith('.jpg') or filename.endswith('.png'):
            input_path = os.path.join(input_folder, filename)
            output_path = os.path.join(output_folder, filename.split('.')[0] + '.png')

            input_img = Image.open(input_path)
            output_img = remove(input_img)


            output_img.save(output_path)

            ct = ColorThief(output_path)
            dominant_color = ct.get_color(quality = 1)

            new_data = {output_path : [dominant_color, 'none']}
            top_dict |= new_data

    for n in top_dict:
        sum = 0
        average = 0

        for e in top_dict[n][0]:
            sum += e
        average = sum/3
        if average > 127.5:
            top_dict[n][1] = "light"
        else:
            top_dict[n][1] = "dark"

    #bottom code

    input_folder = "ibottoms_images"
    output_folder = "obottoms_images"

    bottom_dict = {}

    for filename in os.listdir(input_folder):
        if filename.endswith('.jpeg') or filename.endswith('.jpg') or filename.endswith('.png'):
            input_path = os.path.join(input_folder, filename)
            output_path = os.path.join(output_folder, filename.split('.')[0] + '.png')

            input_img = Image.open(input_path)
            output_img = remove(input_img)


            output_img.save(output_path)

            ct = ColorThief(output_path)
            dominant_color = ct.get_color(quality = 1)

            new_data = {output_path : [dominant_color, 'none']}
            bottom_dict |= new_data

    for n in bottom_dict:
        sum = 0
        average = 0

        for e in bottom_dict[n][0]:
            sum += e
        average = sum/3
        if average > 127.5:
            bottom_dict[n][1] = "light"
        else:
            bottom_dict[n][1] = "dark"


    #shoes code

    input_folder = "ishoes_images"
    output_folder = "oshoes_images"

    shoes_dict = {}

    for filename in os.listdir(input_folder):
        if filename.endswith('.jpeg') or filename.endswith('.jpg') or filename.endswith('.png'):
            input_path = os.path.join(input_folder, filename)
            output_path = os.path.join(output_folder, filename.split('.')[0] + '.png')

            input_img = Image.open(input_path)
            output_img = remove(input_img)


            output_img.save(output_path)

            ct = ColorThief(output_path)
            dominant_color = ct.get_color(quality = 1)

            new_data = {output_path : [dominant_color, 'none']}
            shoes_dict |= new_data

    for n in shoes_dict:   
        sum = 0
        average = 0

        for e in shoes_dict[n][0]:
            sum += e
        average = sum/3
        if average > 127.5:
            shoes_dict[n][1] = "light"
        else:
            shoes_dict[n][1] = "dark"

    #this is the matching code 

    colors = ["light", "dark"]

    def choose_color():
        color = random.choice(colors)
        return color
    def choose_shirt(color):
        y = 1
        arr1 = []
        for x in top_dict.keys():
            if (top_dict[x][1] == color):
                arr1.append(x)
        shirt = random.choice(arr1)
        return shirt
    def choose_pant(color):
        y = 1
        arr1 = []
        for x in bottom_dict.keys():
            if (bottom_dict[x][1] == color):
                arr1.append(x)
        pant = random.choice(arr1)
        return pant
    def choose_shoe(color):
        y = 1
        arr1 = []
        for x in shoes_dict.keys():
            if (shoes_dict[x][1] == color):
                arr1.append(x)
        shoe = random.choice(arr1)
        return shoe

    shoe = ""
    pant = ""
    shirt = ""

    color = choose_color()
    pant = choose_pant(color)
    shoe = choose_shoe(color)
    shirt = choose_shirt(color)

    response = {
        "shirt": shirt,
        "pant": pant,
        "shoe": shoe
    }
    
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)