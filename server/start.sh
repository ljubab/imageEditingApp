docker build -t img-app .
docker run --name img-app-container -p 5000:5000 -d -v $(pwd):/src img-app