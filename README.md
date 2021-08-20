
# Ravebrite

![https://ravebrite-app.herokuapp.com/#/](https://user-images.githubusercontent.com/63977819/125955348-0469447a-2bbe-4a55-a5ae-4a975039712b.png)

[Link to live site](https://ravebrite-app.herokuapp.com/#/)

Ravebrite is an Eventbrite clone where users will be able to search and register for EDM related events. Users will have the ability to create and host their own events as well.

# Technologies Used

* React/Redux
* Ruby on Rails
* PostgreSQL
* Heroku

![image](https://user-images.githubusercontent.com/63977819/125955647-761b9b0d-0236-4e5c-96d6-cede7362b957.png)

## Features

* Users will be able to see all events currently in our database upon entering the site
![home](https://user-images.githubusercontent.com/63977819/125956752-505ff931-6f6e-41f4-8860-7e8c5e5eb06f.gif)

* Users can sign up or log in
![login](https://user-images.githubusercontent.com/63977819/125958716-7b261740-eac2-4acd-812f-3065c356b36f.gif)

* Users can view event pages
![event_show](https://user-images.githubusercontent.com/63977819/125958741-9d12bc45-2e8b-438c-aa41-a5fbc33994b9.gif)

* Users will be able to purchase tickets and view all tickets they own
![registration](https://user-images.githubusercontent.com/63977819/130277389-45de417d-4376-46a3-bba5-fdddf1b63511.gif)

```javascript
purchaseTicket(registration){
        const {createRegistration, currentUserId, event, fetchRegistrations} = this.props
        if (currentUserId) {
            for (let i = 0; i < this.state.ticketAmount; i++){
                createRegistration({user_id: currentUserId, event_id: event.id})
            }
            fetchRegistrations()
            this.props.history.push(`/users/${currentUserId}/registrations`)
        } else {
            this.props.history.push('/login');
        }
    }
```
This function will execute the action creator depending on the amount of tickets the user wants to purchase.  Upon purchase, the user will be redirected to the show page of their tickets to see their newly purchased tickets.  One issue was that not all of the tickets were able to show up on the page upon redirect, so fetching all of the tickets/registrations before the redirect ensured that they would show up.  Additionally, this function will check if the user is logged in or not before purchasing; if they are not, they will be redirected to the login page before being able to purchase their tickets.  

* Users can create and manage their own events
![create_event](https://user-images.githubusercontent.com/63977819/125959455-6387190c-52f2-44c8-b647-a279de88d665.gif)

* Active Storage and AWS S3 Hosting
```javascript
handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('event[title]', this.state.event.title);
        ...
        if (this.state.photoFile) {
            formData.append('event[photo]', this.state.photoFile);
        }

        this.props.processForm(formData, this.props.eventId)
            .then((res) => this.props.history.push(`/events/${res.event.id}`))
    }

handleFile(e) {
        const file = e.currentTarget.files[0]
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({photoFile: file, photoUrl: fileReader.result})
        }

        if (file) {
            fileReader.readAsDataURL(file);
        } else {
            this.setState({ photoFile: null, photoUrl: "" });
        }
    }
```
Users can upload their own image to attach to their event.  Ravebrite is able to access all image previews and event images through AWS S3 Hosting.  Using the properties photoFile and photoUrl, each event, registration, bookmark, and like will be able to display the corresponding image.  

