import pickle

from fastapi import FastAPI

app = FastAPI()

with open('states.pickled', 'rb') as f:
  states = pickle.load(f)


@app.get("/")
def read_root():
    return {"Hello": "World"}
