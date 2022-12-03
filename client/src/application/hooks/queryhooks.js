import { useQuery } from 'react-query';
import services from '../../ioc/services';

export const useGetUserDetails = () => {
    return useQuery('userDetail', () => services.api.userRequests.getSignedInUser());
} 