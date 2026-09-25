Day 04 --- Profile Manager

Overview

For Day 04 of my 100 Days of Code, W/O AI challenge, I built a
Profile Manager using React.

The main goal of this project was to understand form handling,
validation, conditional rendering, component communication, and
state-driven UI by turning a large form into a working profile
management interface.

I built the project without using AI to write the implementation. The
project was developed by understanding the requirements, writing the
logic myself, debugging issues, and improving the UI afterward.

Features & Functionalities

1. Create Profile

Users can open the Profile modal and enter their information.

The form includes:

Full Name

Email

Age

Country

Gender

Multiple Skills

Account Type

Bio

Social Links

Profile Picture

The submitted form is converted into a structured profile object and
added to the profile list.

2. Form Handling & Validation

The project uses FormData to collect the form values.

const formData = new FormData(form);
const obj = Object.fromEntries(formData);

Multiple selected skills are collected using:

const skills = formData.getAll("skills");

Validation handles:

Required fields

Email and URL validation

Required skills

Terms acceptance

Account-specific fields

Image type

Image size

3. Student / Professional Profiles

Users can choose between two account types.

Student

College

Course

Year of Study

Graduation Year

Professional

Company

Job Role

Experience

The relevant fields are displayed using conditional rendering.

4. Profile Picture Upload

Instead of asking users to provide an image URL, the application allows
them to select a local image file.

The flow is:

Image File
    ↓
Validation
    ↓
Preview
    ↓
Profile

JPG and PNG images are supported with a file-size limit.

5. Display Profiles

Created profiles are displayed as responsive profile cards containing:

Profile picture

Name

Email

Account type

Student/Professional information

Bio

Personal information

Skills

Social links

Multiple profiles can be created and displayed at the same time.

6. Delete Profile

Each profile has a delete action.

When clicked:

The profile ID is passed to the parent.

.filter() creates a new array without that profile.

The updated array is stored in state.

React re-renders the profile list.

Component Structure

App
│
├── ProfileForm
│
└── DisplayProfile
    └── Profile Cards

App

Responsible for:

Maintaining profile state

Adding profiles

Generating profile IDs

Deleting profiles

Passing data and functions to child components

ProfileForm

Responsible for:

Handling the form

Validation

FormData extraction

Conditional Student/Professional fields

Image upload and preview

Creating the profile object

DisplayProfile

Responsible for:

Rendering the profile list

Displaying profile information

Displaying Student/Professional details

Showing skills and social links

Triggering delete actions

Data Flow

One of the important concepts I focused on was communication between
components.

ProfileForm

    │

    │ Callback Prop

    ↓

   App

    │

    │ Profile State

    ↓

DisplayProfile

    │

    ↓

Profile Cards

The flow works like this:

User fills form
      ↓
ProfileForm validates data
      ↓
Profile object is created
      ↓
Callback sends profile to App
      ↓
App updates profile state
      ↓
DisplayProfile receives updated list
      ↓
Profile card appears

This helped me understand child → parent communication using callback
props.

React Concepts Practiced

This project gave me practical experience with:

useState

Props

Callback Props

Parent → Child communication

Child → Parent communication

Conditional rendering

.map()

.filter()

Arrays of objects

Immutable state updates

Form handling

FormData

Object.fromEntries()

getAll()

React keys

Event handling

File handling

Problems & Challenges Faced

1. Managing a Large Form

The form had many different input types and validation rules.

Making sure every field behaved correctly while keeping the form
manageable was one of the main challenges.

2. Form Validation

Handling required fields, skills, account-specific fields, terms
acceptance, and image validation required a lot more attention than a
simple form.

The difficult part was making sure validation worked correctly across
all possible form states.

3. Conditional Fields

Student and Professional profiles required different information.

Managing which fields should appear, disappear, and be included in the
final profile object was an important part of the project.

4. CSS Became Messy

One of the biggest challenges was the CSS.

As the application grew, the stylesheet became much larger because the
project included:

Modal

Form sections

Inputs

Conditional fields

Profile cards

Skills

Buttons

Responsive layouts

Keeping the UI consistent while continuously changing the design was
harder than expected.

5. Image Upload

The original idea used an image URL, but that wasn't practical for
normal users.

I changed it to local image upload with validation and a live preview.

6. React State vs Form State

Another issue was understanding that resetting a native form does not
automatically reset React state.

This became especially important for things like:

Account type

Conditional fields

Image preview

It helped me better understand the difference between browser form
behaviour and React state.

What I Learned

The biggest learning from this project was understanding how forms,
state and components work together in React.

Instead of thinking about the form and profile display as separate
pieces, I started thinking about the complete flow:

Form
 ↓
Validation
 ↓
Profile Object
 ↓
State
 ↓
Props
 ↓
Profile Card
 ↓
User Interaction
 ↓
State Update
 ↓
Re-render

The project also gave me more practical experience working with arrays
of objects and passing data between components.

What I Intentionally Did Not Build

I deliberately kept the project focused on the concepts I wanted to
learn.

Not included:

LocalStorage

Backend

Database

Authentication

Search

Filtering

Profile editing

Permanent image storage

These can be added later when the project is expanded.

Tech Stack

React

JavaScript

CSS

Project Status

Day 04 / 100 --- Completed

The Profile Manager MVP is complete with profile creation, validation,
conditional fields, image upload, profile display and deletion.

Future iterations can expand it into a persistent profile management
application.

100 Days of Code, W/O AI

Simple Code. Real Learning. No AI Coding.

The objective is to spend 100 days building projects independently,
understanding the code, debugging problems myself, and gradually
increasing the complexity of what I can build.