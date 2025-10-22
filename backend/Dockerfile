FROM  python:3.13.9

WORKDIR /code

COPY ./requirement.txt /code/requirement.txt

RUN pip install --no-cache-dir --upgrade -r /code/requirement.txt

COPY . /code

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "8000","--port","0.0.0.0"]