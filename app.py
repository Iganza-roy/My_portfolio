from flask import flask, render_template

app = flask(__name__)

@app.route('/about', method ['GET'])
def about():
    return render_template('./index.html')
