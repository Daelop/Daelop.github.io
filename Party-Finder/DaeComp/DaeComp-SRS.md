## Software Specification Requirements for

# DaeComp (Working Title)
# Version 1.0
## Created 23/12/2023 by Daelop

## Part 1: Introduction

### 1.1: Central Concept

DaeComp is intended as a tool to facilitate community events in Final Fantasy XIV. This is done by providing a web-based platform for event organizers to manage participants' information and use it to supplement the audience experience.

### 1.2: Use Cases
While DaeComp will be designed with all community events in mind, it's primary use case will be for structured competitions where giving the audience and judges additional context will enhance the experience. Glamour competitions<sup>1</sup> are an example of this as context and images will help to compare contestants.

## Part 2: Features

### 2.1: User Classes

Users will be grouped into one or more of four classes. These classes will be specific to the event. For example, a user of the 'Audience' class in one event may belong to the 'Organizer' class in another event.

#### 2.1a: Organizer Class

The 'Organizer' class will contain users with permissions to manage the event. These users will be able to edit both the public and private settings of the event, as well as add and remove participants. This class will also include the event creator who will have additional permissions, such as designating Organizers and commencing or cancelling the event. Organizers are required to sign-in using Discord (see section 3).  

#### 2.1b: Participant Class

The 'Participant' class will contain users with permissions to upload and edit their own information. These users will also be able to view any announcements or event information provided by the organizers. Like organizers, participants will also be required to sign-in using Discord.

#### 2.2c: Applicant class

The 'Applicant' class will contain users who are applying or who have applied to participate in the event. Outside of features related to their application, Applicants will have no permissions. Depending on the event's settings, Applicants may or may not be required to sign-in using discord.

#### 2.1d: Audience Class

The Audience Class will contain users that are attending the event without the intent to participate. Audience members will only have permission to view information presented by the Organizers, however, certain events may allow them to participate in voting or giveaways. Audience members are not required to sign-in with Discord.

### 2.2: Event Creation

Event organizers will be able to create new events for participants, audience members and other organizers to join. This will be done by providing basic information about the event such as the name, date, description, ETC.

### 2.3: Event Management

Event management is broken into two stages.

#### 2.3a: Pre-event Management

Pre-event management features are accessible anytime from the creation of the event until the commencement of the event. Organizers will be able to: 
- Define and modify the application form.
- View, accept and reject applicants.
- Modify event information.
- Define both optional and required information for participants to provide.
- Post announcements and promotional material
- Generate and modify a run sheet for participants.
- Remove participants.
- View participant information.
- Cancel the event.

#### 2.3b: Live Management

Live management features are available once the event has commenced.
- Judging
- Audience event commencement (voting, giveaways, etc)
- Initialising score tallying
- Advancing run sheet
- Editing run sheet

### 2.4: Participant Features

Participants will be able to provide information about their entry to organizers. The scope of information that can be submitted will depend on settings, but may include:
- Image(s) of the entry.
- A description of the entry.
- A name for their entry.

### 2.5: Audience Features

Audience members will only be able to view certain information (determined by organizers) and interact with the event through voting and/or giveaways.

## Part 3: API's and Data Management

API usage is currently TBC, pending better understanding of usability.

### 3.1: XIVAPI



### 3.2: Discord API



### 3.3: Event Data



### 3.4: User Data



## Part 4: Future Plans

### 4.1: Support for Other Games

DaeComp will be built to eventually host events from a diverse range or different games. Currently, the app is planned specifically for FFXIV as it provides a usable MVP (minimum viable product) with which to test it.

### 4.2: Party Finder

DaeComp is intended to be a part of a larger project called 'Party Finder' this project will provide a platform to list, find, and join community events from a number of popular games.

## Part 5: Glossary

#### <sup>1</sup> Glamour Competition



