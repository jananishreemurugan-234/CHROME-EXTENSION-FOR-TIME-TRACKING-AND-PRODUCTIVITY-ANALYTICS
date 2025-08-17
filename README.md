# CHROME EXTENSION FOR TIME TRACKING AND PRODUCTIVITY ANALYTICS

COMPANY: CODTECH IT SOLUTIONS

NAME: M.JANANI SHREE

INTERN ID:CT04DZ1778

DOMAIN: FULL STACK WEB DEVELOPMENT

DURATION: 4 WEEKS

MENTOR: NEELA SANTHOSH

## Task Description

## Overview
The objective of this task is to develop a Chrome Extension that monitors the time a user spends on different websites and provides productivity analytics through an interactive dashboard. The extension should automatically track browsing activity, classify websites as either productive or unproductive, and display the results visually. Additionally, the tool should generate weekly productivity reports, helping users evaluate their focus and reduce time wasted on distractions.

This extension will serve professionals, students, and anyone who wants to manage their digital habits better. It works silently in the background, collecting time data per domain, and visualizes the information in the form of pie charts, bar charts, and summaries. The results are presented inside the extension’s popup/dashboard. For long-term usage, a backend can be integrated to store and sync user data.

## Key Deliverables

1.Chrome Extension (Manifest V3)
A background script/service worker to track active tabs and user activity.
Content scripts (if needed) to detect idle states or provide interaction signals.
Options page for configuring website categories (productive vs unproductive).
Popup/Dashboard page to view analytics.

2.Time Tracking System
Automatically records how long a user spends on each domain.
Handles cases such as switching tabs, browser minimization, or idle time.
Stores results in chrome.storage.local.

3.Website Classification
Maintain a predefined list of productive websites (e.g., github.com, leetcode.com) and unproductive ones (e.g., facebook.com, instagram.com).
Allow users to customize these lists.
Calculate productive time vs unproductive time.

4.Analytics Dashboard
Display a pie chart showing distribution of time across domains.
Show total productive vs unproductive minutes clearly.
Generate weekly summaries of browsing behavior.
Provide simple insights such as “Top productive website” and “Most distracting website.”

## Technical Requirements

Frontend (Extension UI): HTML, CSS, JavaScript

Visualization: Canvas API or Chart.js for charts

Backend (optional): Node.js with Express / Firebase

Database (optional): MongoDB or Firestore

APIs Used: Chrome APIs (tabs, storage, idle, alarms, runtime)

## Outcome

At the end of this task, the extension should:
Track time spent per website accurately.
Classify time as productive or unproductive.
Display results in a clean, user-friendly dashboard.
Provide weekly reports and insights.
Support future enhancements such as exporting data, setting goals, or receiving alerts.

## Conclusion

This project will deliver a powerful yet lightweight Chrome Extension for time tracking and productivity analytics. By combining automated time monitoring with clear visual reports, it enables users to identify where their time goes and strike a balance between productivity and distractions. With its customizable classification system, intuitive dashboard, and potential backend support for long-term storage, the tool is designed to be both flexible and user-centric. Ultimately, this extension helps users develop healthier digital habits, optimize focus, and achieve better results in their work or study routines.

## Output
<img width="899" height="913" alt="Screenshot 2025-08-17 131753" src="https://github.com/user-attachments/assets/8dad9da0-e51e-4b1d-ab86-c0b75c4e1a66" />
