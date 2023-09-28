import { apiFetch } from '../../../api';
import { MeterPost } from '../contracts';

const createMeter = async (meter: MeterPost) => {
    if (!meter) {
        throw new Error('Meter is required');
    } else {
        const data: boolean = await apiFetch('POST', `accounts/meters/create`, meter);
        if (!data) {
            throw new Error('Failed to create meter');
        }
        //TODO! if data is true then make another call to get the created meter and return it

        const createdMeter: MeterPost = await apiFetch('GET', `accounts/meters/get_o_algo_asi`);
        return createdMeter;
    }
};

export const meterService = {
    createMeter,
};
