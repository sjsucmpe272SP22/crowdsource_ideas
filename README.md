Group Members:
- Siddhant Satish Parmar
- Kumar Raja Pavuluri
- Anirudh Satyam
- Roger Kuo

---
# Project Proposals

## 1
1. Title

Sublease-Finder

2. Introduction to the problem statement

A lot of students want a lease for a very short duration when they do an internship. 

Apartments either don’t give a lease for a short duration or they charge very high rent. The only viable option in such a scenario is for students to take a sublease from another student. 

This process is very messy because usually students contact other students on facebook or instagram, and there is no concrete proof about this agreement or transactions.

Our solution provides a platform for such agreements where there is a clear documentation of the agreed terms.

3. Abstract

We provide a platform for a student/person(seller), who wants to sublease their apartment, to upload their apartment details, along with cost, address and other details on our portal.

We also enable a student/person(buyer) looking for a sublease to search apartments based on their work address/cost, on our portal.

We show the buyer a list of apartments within a 25 mile radius that are being subleased. Then, the buyer can evaluate parameters of the apartment like the cost, facilities etc and make an informed decision.

4. Approach

We have 2 types of views for our application.

The first view is for the student/person who wants to sublease their apartment. They will submit their apartment details, along with cost, address and any other other details on our portal.

The second view is a search page for the student/person looking for a sublease.They will have to enter their desired address/work address. The algorithm will return a list of apartments within a 25 mile radius.

The buyer will then choose an apartment, choose their lease period and complete the process with the seller.

5. Persona(s)

This solution is especially designed for students who do internships in other cities of the US, which is a very common occurrence.

6. Dataset links (if any)

N/A

## 2 - 

Title:
Inventory management

Introduction:
Inventory tracking application for recording resource utilization

Abstract:
Many organizations fail to track their inventories. Sometimes, there would be large stock of products not sold and in other scenarios, there is shortage of items
So, this application keeps track of resources and manage inventory

Approach: 
In this project, we apply Data Modeling with Cassandra and build an ETL pipeline using Python. We will develop a model by creating tables in apache cassandra around our queries that we want to get answers for. For our use case,we might want below information:

1)Get details of different products sold during particular season and in particular areas
2)Analysing performance of different stores in a particular region
3)Evaluating customer information required to maintain the retention

Persona:
This will be helpful to the organizations who are facing difficulties in tracking their resources and optimizing the costs involved in it.

Dataset links:
N/A

## 3 - 

1. Title

Auditable Electronic Voting

2. Abstract

Voting has been made more accessible due to the introduction of electronic voting systems. 
Political elections have been utilizing electronic voting systems for several years. 
However, unlike with physical ballots, the Voting results from electronic voting systems are difficult to verify and often need to be audited. 
This problem was notably highlighted during the 2020 USA presidential elections.

3. Approach

Design a generic voting system that can produce different types of receipts (paper, audio, etc) that both the voters and auditors can easily verify.
The voting system should also check for invalid votes. This could include duplicates, deceased people, and ineligible voters.
