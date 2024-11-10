import pandas as pd
import matplotlib.pyplot as plt 

df = pd.read_csv('Quiz1Results.csv')

#grades
x = df['Student ID']
y = df['Percentage']

plt.scatter(x, y)

plt.title('Quiz 1 Performance')
plt.xlabel('Student ID')
plt.xlabel('')
plt.xticks([])
plt.ylabel('Percentage')

plt.show() 