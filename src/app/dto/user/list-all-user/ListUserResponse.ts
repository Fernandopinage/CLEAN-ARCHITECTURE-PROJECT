import { UserDomain } from '@/domain/entities/UserDomain';

export interface ListUserResponse {
	list?: Array<UserDomain>;
	count?: number;
}
