import csv
import pandas as pd
import matplotlib.pyplot as plt 

quiz_scores = []

with open('Quiz1Results.csv') as file:
    csv_reader = csv.reader(file)
    next(csv_reader)
    for row in csv_reader:
        #gets rid of any duplicate data by looking at student ID, if they are the same, we remove one
        quiz_scores.append(float(row[-1]))
        quiz_scores.sort()

#finds the average total for users
avg_total = sum(quiz_scores)/len(quiz_scores)
rounded_total = round(avg_total, 2)
print("Percent values in last column: ", rounded_total)

#sort through the percentages and find the range
print("Range:", quiz_scores[0], "-", quiz_scores[-1])