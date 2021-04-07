import {
    GET_FEED,
    GET_ALL_FEEDS,
    ADD_NEWSLETTER,
    REMOVE_NEWSLETTER
} from './actionTypes';

import {
    getOneFeed,
    getAllFeeds,
    addNewsletterToFeed,
    removeNewsletterFromFeed
} from '../services/feedService';

export const getFeedSuccess = (feed) => ({
    type: GET_FEED,
    payload: feed,
});

export const getAllFeedsSuccess = (feeds) => ({
    type: GET_ALL_FEEDS,
    payload: feeds,
});

export const addNewsletterSuccess = (newsletter) => ({
    type: ADD_NEWSLETTER,
    payload: newsletter
});

export const removeNewsletterSuccess = (newsletterId) => ({
    type: REMOVE_NEWSLETTER,
    payload: newsletterId
})

export const getFeed = (_id, idToken) => async (dispatch) => {
    try {
        const res = await getOneFeed(_id, idToken);
        const data = await res.json();

        if (data.error) {
            throw data.error;
        }

        dispatch(getFeedSuccess(data));
    } catch (error) {
        alert(error);
    }
};

export const getFeeds = (idToken) => async (dispatch) => {
    try {
        const res = await getAllFeeds(idToken);
        const data = await res.json();

        if (data.error) {
            throw data.error;
        }

        dispatch(getAllFeedsSuccess(data));
    } catch (error) {
        alert(error);
    }
};

export const addNewsletter = (newsletter, feedId, idToken) => async (dispatch) => {
    try {
        const res = await addNewsletterToFeed(newsletter._id, feedId, idToken);
        const data = await res.json();

        if (data.error) {
            throw data.error;
        }

        dispatch(addNewsletterSuccess(newsletter));
    } catch (error) {
        alert(error);
    }
}

export const removeNewsletter = (newsletterId, feedId, idToken) => async (dispatch) => {
    try {
        const res = await removeNewsletterFromFeed(newsletterId, feedId, idToken);
        const data = await res.json();

        if (data.error) {
            throw data.error;
        }

        dispatch(removeNewsletterSuccess(newsletterId));
    } catch (error) {
        alert(error);
    }
}