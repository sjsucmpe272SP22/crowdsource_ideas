#!/usr/bin/env python
# coding: utf-8

# In[536]:


import os
import pandas as pd
import numpy as np
from scipy.stats import randint
import seaborn as sns # used for plot interactive graph.
import matplotlib.pyplot as plt
import seaborn as sns
from io import StringIO
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.feature_selection import chi2
from IPython.display import display
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfTransformer
from sklearn.naive_bayes import MultinomialNB
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import LinearSVC
from sklearn.model_selection import cross_val_score
from sklearn.metrics import confusion_matrix
from sklearn import metrics


# In[537]:


df = pd.read_csv("272-regression.csv")
# df.head()


# In[538]:


# df['Text'].str.lower()


# In[539]:


x = df['Text']
y = df['Hours to implement']


# In[540]:


from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.feature_extraction import DictVectorizer
from scipy.sparse import hstack
from sklearn.linear_model import Ridge


# In[541]:


x = x.str.lower()


# In[542]:


x = x.replace('[^a-zA-Z0-9]', ' ', regex = True)


# In[543]:


from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.pipeline import Pipeline, FeatureUnion
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import FunctionTransformer
from sklearn.model_selection import GridSearchCV, StratifiedKFold


# In[544]:


from sklearn.feature_extraction.text import TfidfVectorizer
tfidf = TfidfVectorizer(max_features=100)
tfidf.fit(x)
tfidf_data = tfidf.transform(x)

tfidf_data = pd.DataFrame(tfidf_data.toarray(), columns=tfidf.get_feature_names())
tfidf_data.shape


# In[545]:


# tfidf_data.head()


# In[546]:


# type(tfidf_data)


# In[547]:


X = tfidf_data.values


# In[548]:


y = y.values


# In[549]:


from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X,y,test_size=0.1)


# In[550]:


# X_train


# In[551]:


from sklearn.linear_model import LinearRegression
regressor = LinearRegression()
regressor.fit(X_train, y_train)


# In[552]:


y_pred = regressor.predict(X_test)
np.set_printoptions(precision=2)
print(np.concatenate((y_pred.reshape(len(y_pred),1), y_test.reshape(len(y_test),1)),1))


# In[553]:


# from sklearn.metrics import r2_score
# print(r2_score(y_test, y_pred))


# In[554]:


print(regressor.predict(tfidf.transform(['Try to implement different over-delivering strategies which will mean that your small business will always over-deliver more than what you have promised'])))

