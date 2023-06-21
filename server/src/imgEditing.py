from wand.image import Image

def blur(img, sigmaValue = 0):
    img.blur(sigma = sigmaValue)

def rotate(img, rotationDegreeValue = 0):
    img.rotate(rotationDegreeValue)

def edge(img, radiusValue = 0):
    img.edge(radiusValue)

def grayscale(img):
    img.transform_colorspace('gray')