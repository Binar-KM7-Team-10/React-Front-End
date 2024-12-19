import { useContext, useEffect } from 'react';
import { BookingHistoryContext } from '../contexts/BookingHistoryContext';
import { getBookingHistory } from '../services/bookingHistory.service';

export const useBookingHistory = (booking) => {
    const { state = {}, dispatch } = useContext(BookingHistoryContext);

    const { 
        bookingHistory = null, 
        loading = false, 
        error = null 
    } = state;

    useEffect(() => {
        let isActive = true;

        const fetchBookingHistory = async () => {

            try {
                dispatch({ type: 'SET_LOADING', payload: true });
                
                const response = await getBookingHistory(booking);

                if (!response?.data) {
                    throw new Error('No data received from server');
                }

                const data = response.data;
                
                if (isActive) {
                    const transformedData = {
                        date: data.date ? new Date(data.date).toLocaleDateString('id-ID', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        }) : '',
                        status: data.status,
                        bookingCode: data.bookingCode,
                        tickets: []
                    };

                    if (data.itinerary?.outbound) {
                        const outbound = data.itinerary.outbound;
                        transformedData.tickets.push({
                            departureCity: outbound.departure?.city || '',
                            departureDate: outbound.departure?.dateTime ? 
                                new Date(outbound.departure.dateTime).toLocaleDateString('id-ID') : '',
                            departureTime: outbound.departure?.dateTime ? 
                                new Date(outbound.departure.dateTime).toLocaleTimeString('id-ID') : '',
                            distance: outbound.duration ? 
                                `${Math.floor(outbound.duration / 60)}h ${outbound.duration % 60}m` : '',
                            arrivalCity: outbound.arrival?.city || '',
                            arrivalDate: outbound.arrival?.dateTime ? 
                                new Date(outbound.arrival.dateTime).toLocaleDateString('id-ID') : '',
                            arrivalTime: outbound.arrival?.dateTime ? 
                                new Date(outbound.arrival.dateTime).toLocaleTimeString('id-ID') : '',
                            bookingCode: data.bookingCode || '',
                            flightClass: outbound.seatClass || '',
                            price: data.invoice?.totalAmount || 0,
                            status: data.status || 'Unknown',
                            type: 'Outbound'
                        });
                    }

                    if (data.itinerary?.inbound) {
                        const inbound = data.itinerary.inbound;
                        transformedData.tickets.push({
                            departureCity: inbound.departure?.city || '',
                            departureDate: inbound.departure?.dateTime ? 
                                new Date(inbound.departure.dateTime).toLocaleDateString('id-ID') : '',
                            departureTime: inbound.departure?.dateTime ? 
                                new Date(inbound.departure.dateTime).toLocaleTimeString('id-ID') : '',
                            distance: inbound.duration ? 
                                `${Math.floor(inbound.duration / 60)}h ${inbound.duration % 60}m` : '',
                            arrivalCity: inbound.arrival?.city || '',
                            arrivalDate: inbound.arrival?.dateTime ? 
                                new Date(inbound.arrival.dateTime).toLocaleDateString('id-ID') : '',
                            arrivalTime: inbound.arrival?.dateTime ? 
                                new Date(inbound.arrival.dateTime).toLocaleTimeString('id-ID') : '',
                            bookingCode: data.bookingCode || '',
                            flightClass: inbound.seatClass || '',
                            price: data.invoice?.totalAmount || 0,
                            status: data.status || 'Unknown',
                            type: 'Inbound'
                        });
                    }

                    dispatch({ type: 'SET_BOOKING_HISTORY', payload: transformedData });
                }
            } catch (error) {
                if (isActive) {
                    dispatch({ 
                        type: 'SET_ERROR', 
                        payload: error.response?.data?.message || error.message || 'Failed to fetch booking history'
                    });
                }
            } finally {
                if (isActive) {
                    dispatch({ type: 'SET_LOADING', payload: false });
                }
            }
        };

        if (dispatch) {
            fetchBookingHistory();
        }

        return () => {
            isActive = false;
        };
    }, [booking, dispatch]);

    return { bookingHistory, loading, error };
};