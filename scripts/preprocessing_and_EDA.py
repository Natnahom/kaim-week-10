import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

def preprocessing(df):

    """
    Preprocess the data: handle missing values and ensure correct types.
    
    Args:
        df (pd.DataFrame): DataFrame containing the oil prices.
        
    Returns:
        pd.DataFrame: Cleaned DataFrame.
    """

    df = df.dropna(inplace=True) # removes missing values from the original data

    # Drop duplicates
    df = df.drop_duplicates()
    df['Price'] = df['Price'].astype(float)

    # Replace outliers with median
    median = np.median(df['Price'])
    threshold = 3 * np.std(df['Price'])
    df['Price'] = np.where(np.abs(df['Price'] - median) > threshold, median, df['Price'])
    
    return df

def EDA(df):
    
    return df