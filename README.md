Movie Picture Pipeline
A CI/CD pipeline for a Movie Picture web application using GitHub Actions, Docker, AWS ECR, and EKS.
Overview
This project automates testing, building, and deployment of a full-stack application:

Frontend: React (TypeScript)
Backend: Flask API

Pipeline flow: GitHub Actions → Docker → ECR → EKS
CI/CD Pipelines
Frontend

CI: Lint (ESLint), Test, Build
CD: Lint, Test, Build, Push to ECR, Deploy to EKS

Backend

CI: Lint (Flake8), Test (Pytest), Build
CD: Lint, Test, Build, Push to ECR, Deploy to EKS

Tech Stack
GitHub Actions, Docker
AWS ECR, AWS EKS
Terraform, Kustomize
React, Flask
ESLint, Flake8, Jest, Pytest
Project Structure
.github/workflows
setup/terraform
starter/frontend
starter/backend
Setup

Create AWS infrastructure using Terraform
Configure Kubernetes access using AWS EKS
Create IAM access keys for GitHub Actions
Add GitHub secrets: AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY
Set REACT_APP_MOVIE_API_URL to the backend service URL

Deployment

Run backend deployment pipeline
Get backend service URL and set it in REACT_APP_MOVIE_API_URL
Run frontend deployment pipeline
Access the frontend using the service URL

Verification

Backend: access the /movies endpoint to get movie data
Frontend: open the application in a browser to see the movie list
