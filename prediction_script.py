import random
import json

def generate_mock_prediction():
    input_data = [random.uniform(0, 1) for _ in range(3)]
    predicted = random.choice([0, 1])
    actual = random.choice([0, 1])
    return {"input": input_data, "predicted": predicted, "actual": actual}

predictions = [generate_mock_prediction() for _ in range(10)]
print(json.dumps(predictions))
