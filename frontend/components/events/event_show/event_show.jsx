import moment from "moment";
import React, { useState } from "react";
import {Link, withRouter} from "react-router-dom"

class EventShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            bookmarked: false,
            modal: false
        };
        

        this.deleteEvent = this.deleteEvent.bind(this)
        this.handleBookmark = this.handleBookmark.bind(this)
        this.purchaseTicket = this.purchaseTicket.bind(this)
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    handleBookmark(e) {
        e.preventDefault()
        if (this.state.bookmarked === false){
            this.setState({bookmarked: true})
        } else {
            this.setState({bookmarked: false})
        }
    }

    componentDidMount(){
        this.props.fetchEvent(this.props.match.params.eventId).then(() => {
            this.setState({loading: false})
        })
    }

    deleteEvent(eventId){
        this.props.deleteEvent(eventId)
        this.props.history.push('/')
    }

    purchaseTicket(registration){
        // console.log('literally anything')
        const {currentUser, event} = this.props
        console.log(currentUser)
        this.props.createRegistration({user_id: currentUser, event_id: event.id})
            // .then((res) => this.props.history.push(`/users/${res.event.id}`))
        // console.log(createRegistration)
    }

    openModal() {
        this.setState({ modal: true });
    }

    closeModal() {
        this.setState({ modal: false });
    }

    componentWillUnmount() {
    }

    render(){
        if (this.state.loading){
            return(
                <>
                    loading
                </>
            )
        } else {
            const {event, currentUser} = this.props
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

            const bookmarkEvent = () => {
                if (this.state.bookmarked === false){
                    return <i className="far fa-heart bookmark" ></i>
                } else { 
                    return <i className="fas fa-heart bookmark active"></i>
                }
            }

            const RegistrationModal = () => {
                const registration = {user_id: this.props.currentUser.id, event_id: this.props.event.id}

                return(
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
                                <div className="modal-image">
                                    <img src={window.rave} alt="rave"/>
                                </div>
                                <div className="order-summary">
                                    <h3>
                                        Order Summary
                                    </h3>
                                    <br />
                                    <div className="ticket-price">
                                        <p>1 x {event.title}</p>
                                        <p>$20.00</p>
                                    </div>
                                </div>
                                <div className="price-total">
                                    <div className="ticket-price">
                                        <h3>Total</h3>
                                        <p>$20.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            return (
                <div className="event-show-wrapper">
                    <div className="event-show-background">
                        <img src={window.rave} alt="rave"/>
                    </div>
                    
                    <div className="event-show-card">
                        <div className="event-show-details">
                            <div>
                                <img src={window.rave} alt="rave" className="event-show-image"/>
                            </div>
                            <div className="event-basic-info">
                                <label className="event-details-child show-location">
                                        {moment(event.start_date).format("dddd, MMMM Do YYYY")}
                                </label>
                                <br />

                                <h3  className="event-details-child show-title">{event.title}</h3>
                                <br />

                                <p  className="event-details-child show-genre">{event.genre}</p>
                            </div>
                        </div>

                        <div className="event-show-func-buttons">
                            <div className="show-bookmark-wrapper">
                                <div className="bookmark-circle-show-like" onClick={this.handleBookmark} >
                                    {bookmarkEvent()}
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
                                    {currentUser === event.host_id ? currUserButtons() : ''}
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