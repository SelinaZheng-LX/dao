import pandas as pd
import json

def generate_scatter_plot_data(csv_file='Quiz1Results.csv'):
  """
  Reads student test scores from a CSV file, calculates averages,
  and prepares scatter plot data for JSON serialization.

  Args:
      csv_file (str, optional): Path to the CSV file containing scores. Defaults to 'Quiz1Results.csv'.

  Returns:
      dict: Dictionary containing scatter plot data in JSON format.
  """

  df = pd.read_csv(csv_file)

  # Calculate averages (assuming 'Student ID' is the unique identifier)
  averages = df.groupby('Student ID')['Percentage'].mean()

  # Prepare JSON data
  data = {
      'labels': averages.index.to_list(),  # Extract student IDs as labels
      'datasets': [{
          'label': 'Average Scores',
          'data': averages.to_list(),
          'backgroundColor': 'rgba(255, 99, 132, 0.2)',  # Example color
          'borderColor': 'rgba(255, 99, 132, 1)',
          'borderWidth': 1
      }]
  }

  with open('scatter_data.json', 'w') as f:
      json.dump(data, f)

  return data  # Optional: Return data for potential reuse

# Generate and potentially use the data
scatter_data = generate_scatter_plot_data()
# print(scatter_data)  # Uncomment to print data (for debugging)