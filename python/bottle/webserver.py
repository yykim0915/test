from bottle import route, run

@route('/<name>')
def index(name='World'):
	return 'Hello %s' % name
run(host='0.0.0.0', port=8080, threaded=True)
