import { createContext, useReducer, useCallback } from 'react';

const BOOKING_HISTORY_ACTIONS = {
    SET_BOOKING_HISTORY: 'SET_BOOKING_HISTORY',
    SET_LOADING: 'SET_LOADING',
    SET_ERROR: 'SET_ERROR',
    RESET_STATE: 'RESET_STATE'
};

const bookingHistoryReducer = (state, action) => {
    switch (action.type) {
        case BOOKING_HISTORY_ACTIONS.SET_BOOKING_HISTORY:
            return { 
                ...state, 
                bookingHistory: action.payload,
                error: null 
            };
        case BOOKING_HISTORY_ACTIONS.SET_LOADING:
            return { ...state, loading: action.payload };
        case BOOKING_HISTORY_ACTIONS.SET_ERROR:
            return { 
                ...state, 
                error: action.payload,
                loading: false, 
                bookingHistory: null 
            };
        case BOOKING_HISTORY_ACTIONS.RESET_STATE:
            return initialState;
        default:
            return state;
    }
};

const initialState = {
    bookingHistory: null,
    loading: false,
    error: null
};

const BookingHistoryContext = createContext(initialState);

const BookingHistoryProvider = ({ children }) => {
    const [state, dispatch] = useReducer(bookingHistoryReducer, initialState);

    // Buat action creators dengan useCallback untuk optimasi
    const setBookingHistory = useCallback((data) => {
        dispatch({ type: BOOKING_HISTORY_ACTIONS.SET_BOOKING_HISTORY, payload: data });
    }, []);

    const setLoading = useCallback((isLoading) => {
        dispatch({ type: BOOKING_HISTORY_ACTIONS.SET_LOADING, payload: isLoading });
    }, []);

    const setError = useCallback((error) => {
        dispatch({ type: BOOKING_HISTORY_ACTIONS.SET_ERROR, payload: error });
    }, []);

    const resetState = useCallback(() => {
        dispatch({ type: BOOKING_HISTORY_ACTIONS.RESET_STATE });
    }, []);

    const actions = {
        setBookingHistory,
        setLoading,
        setError,
        resetState
    };

    return (
        <BookingHistoryContext.Provider value={{ state, actions }}>
            {children}
        </BookingHistoryContext.Provider>
    );
};

export { 
    BookingHistoryContext, 
    BookingHistoryProvider,
    BOOKING_HISTORY_ACTIONS 
};