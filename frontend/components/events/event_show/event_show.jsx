import moment from "moment";
import React, { useState } from "react";
import {Link, withRouter} from "react-router-dom"

class EventShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            bookmarked: false,
            modal: false,
            ticketAmount: 1
        };
        

        this.deleteEvent = this.deleteEvent.bind(this)
        this.handleBookmark = this.handleBookmark.bind(this)
        this.purchaseTicket = this.purchaseTicket.bind(this)
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.changeTicketAmount = this.changeTicketAmount.bind(this)
    }

    handleBookmark(e) {
        e.preventDefault()

        if (this.props.currentUserId){
            const { currentUserId,
                    event,
                    deleteBookmark,
                    createBookmark,
                    fetchEvent,
                    } = this.props
            let bookmarks = event.bookmarks || {};
            let bookmark = bookmarks[currentUserId];

            if (bookmarks.hasOwnProperty(currentUserId)){
                this.setState({bookmarked: false})
                deleteBookmark(bookmark.id)
                    .then(() => fetchEvent(event.id));
            } else {
                this.setState({bookmarked: true})
                createBookmark({user_id: currentUserId, event_id: event.id})
                    .then(() => fetchEvent(event.id));
            }
        } else {
            this.props.history.push('/login');
        }
    }

    bookmarkEvent (){
        const {event, currentUserId} = this.props

        let bookmarks = event.bookmarks || {};

        if (!bookmarks.hasOwnProperty(currentUserId)){
            return <i className="far fa-heart bookmark" ></i>
        } else { 
            return <i className="fas fa-heart bookmark active"></i>
        }
    }

    componentDidMount(){
        let footer = document.getElementsByClassName('footer')[0]
        footer.setAttribute("style", "margin-top: 10%")

        this.props.fetchEvent(this.props.match.params.eventId).then(() => {
            this.setState({loading : false})
        })
    }

    deleteEvent(eventId){
        this.props.deleteEvent(eventId)
        this.props.history.push('/')
    }

    purchaseTicket(registration){
        const {createRegistration, currentUserId, event, fetchRegistrations} = this.props
        if (currentUserId) {
            for (let i = 0; i < this.state.ticketAmount; i++){
                createRegistration({user_id: currentUserId, event_id: event.id})
            }
            // fetchRegistrations(currentUserId)
            this.props.history.push(`/users/${currentUserId}/registrations`)
        } else {
            this.props.history.push('/login');
        }
    }

    openModal() {
        this.setState({ modal: true });
    }

    closeModal() {
        this.setState({ modal: false });
    }

    componentWillUnmount() {
    }

    changeTicketAmount(e){
        const valueSelectedByUser = parseInt(e.target.value);
        this.setState({ ticketAmount : valueSelectedByUser });
    }

    render(){
        if (this.state.loading){
            return(
                <>
                    Loading...
                </>
            )
        } else {
            const {event, currentUserId} = this.props
            const currUserButtons = () => {
                return (
                    <>
                        <button className="user-button">
                            <Link to={`/events/${event.id}/edit`} className="edit">Edit Event</Link>
                        </button>
                        <br />
                        <button onClick={() => this.deleteEvent(event.id)} className="user-button">Delete Event</button>
                    </>
                )
            }

            const RegistrationModal = () => {
                return (
                    <div className="registration-modal" onClick={this.closeModal}>
                        <div className="modal-content" onClick={e => e.stopPropagation()}>
                            <div className="modal-content-left">
                                <div className="modal-event-info">
                                    <h2>
                                        {event.title}
                                    </h2>
                                    <p>
                                        {moment(event.start_date).format("dddd, MMMM Do YYYY")}, {event.start_time} - {moment(event.end_date).format("dddd, MMMM Do YYYY")} {event.end_time}
                                    </p>
                                </div>
                                <div className="modal-about">
                                    <h2>
                                        {event.title}
                                    </h2>
                                    <p>
                                        {event.description}
                                    </p>
                                </div>

                                <div className="modal-purchase-button-wrapper">
                                    <button 
                                        className="modal-purchase-button" 
                                        onClick={this.purchaseTicket}
                                        >
                                        Purchase
                                    </button>
                                </div>
                            </div>
                            <div className="modal-content-right">
                                <div className="close-button" onClick={this.closeModal}>x</div>
                                <div className="modal-image-wrapper">
                                    <img src={event.photoUrl} className="modal-image" alt="rave"/>
                                </div>
                                <div className="order-summary">
                                    <h3>
                                        Order Summary
                                    </h3>
                                    <br />
                                    <div className="ticket-price">
                                    <select 
                                        placeholder="1"
                                        onChange={this.changeTicketAmount}
                                        value={this.state.ticketAmount}
                                    > 
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                    <p>x {event.title}</p>
                                    </div>
                                </div>
                                <div className="price-total">
                                    <div className="ticket-price">
                                        <h3>Total</h3>
                                        <p>{this.state.ticketAmount} ticket(s)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            return (
                <div className="event-show-container">
                    <div className="event-show-background">
                        <img src={event.photoUrl} alt="rave"/>
                    </div>
                    <div className="event-show-wrapper">
                        
                        <div className="event-show-card">
                            <div className="event-show-details">
                                <div className="event-show-image-wrapper">
                                    <img src={event.photoUrl} alt="rave" className="event-show-image"/>
                                </div>
                                <div className="event-basic-info">
                                    <label className="event-details-child show-location">
                                            {moment(event.start_date).format("dddd, MMMM Do YYYY")}
                                    </label>
                                    <br />

                                    <h2  className="event-details-child show-title">{event.title}</h2>
                                    <br />

                                    <p className="event-host">Hosted by: {event.hostFirstName} {event.hostLastName}</p>
                                    <p  className="event-details-child show-genre">{event.genre}</p>
                                </div>
                            </div>

                            <div className="event-show-func-buttons">
                                <div className="show-bookmark-wrapper">
                                    <div className="bookmark-circle-show-like" onClick={this.handleBookmark} >
                                        {this.bookmarkEvent()}
                                    </div>
                                </div>
                                <div className="button-wrapper">
                                    <button 
                                        className="purchase-button"
                                        onClick={() => this.openModal()}
                                    >
                                        Purchase tickets
                                    </button>
                                    {!this.state.modal ? null : <RegistrationModal />}
                                </div>
                            </div>

                            <div className="event-show-info">
                                <div className="event-show-info-left">
                                    About this event
                                    <br />
                                    <p className="event-description">{event.description}</p>
                                    <br />
                                </div>

                                <div className="event-show-info-right">
                                    <label>Date and time
                                        <br />
                                        <p>
                                            {moment(event.start_date).format("dddd, MMMM Do YYYY")}, {event.start_time} - {moment(event.end_date).format("dddd, MMMM Do YYYY")} {event.end_time}
                                        </p>
                                    </label>
                                    <br />

                                    <label>Location
                                        <br />  
                                        <p>
                                            {event.location}
                                        </p>
                                    </label>
                                    <br />

                                    <div className="user-button-wrapper">
                                        {currentUserId === event.host_id ? currUserButtons() : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default withRouter(EventShow)