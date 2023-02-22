import {
	CreateAcademicRequest,
	CreateAddressRequest,
	CreateCourseRequest,
	CreateExperienceRequest,
	CreateInterestRequest,
	CreateLanguagemRequest,
	CreateUtvRequest,
	HttpRequest
} from '@/app/dto';
import AcademicGateway from '@/infra/gateways/AcademicGateway';
import AddressGateway from '@/infra/gateways/AddressGateway';
import CourseGateway from '@/infra/gateways/CourseGateway';
import InterestGateway from '@/infra/gateways/InterestGateway';
import ExperienceGateway from '@/infra/gateways/ExperienceGateway';
import CreateAcademicUseCase from '../academic/CreateAcademicUseCase';
import CreateAddressUseCase from '../address/CreateAddressUseCase';
import CreateCourseUseCase from '../course/CreateCourseUseCase';
import CreateExperienceUseCase from '../experience/CreateExperienceUseCase';
import CreateInterestUseCase from '../interest/CreateInterestUseCase';
import CreateLanguagemUseCase from '../languagem/CreateLanguagemUseCase';
import LanguagemGateway from '@/infra/gateways/Language,Gateway';
import CreateUtvUseCase from '../utv/CreateUtvUseCase';
import UtvGateway from '@/infra/gateways/UtvGateway';

export default class RefactorUseCase {
	static setAcademic(parms: HttpRequest<CreateAcademicRequest>) {
		const createAcademicUseCase = new CreateAcademicUseCase(new AcademicGateway());
		return createAcademicUseCase.execute(parms);
	}

	static setAddress(parms: HttpRequest<CreateAddressRequest>) {
		const createAddressUseCase = new CreateAddressUseCase(new AddressGateway());
		return createAddressUseCase.execute(parms);
	}

	static setCourse(parms: HttpRequest<CreateCourseRequest>) {
		const createCourseUseCase = new CreateCourseUseCase(new CourseGateway());
		return createCourseUseCase.execute(parms);
	}

	static setExperience(parms: HttpRequest<CreateExperienceRequest>) {
		const experienceUseCase = new CreateExperienceUseCase(new ExperienceGateway());
		return experienceUseCase.execute(parms);
	}

	static setInterest(parms: HttpRequest<CreateInterestRequest>) {
		const interestUseCase = new CreateInterestUseCase(new InterestGateway());
		return interestUseCase.execute(parms);
	}

	static setLanguagem(parms: HttpRequest<CreateLanguagemRequest>) {
		const languagemUseCase = new CreateLanguagemUseCase(new LanguagemGateway());
		return languagemUseCase.execute(parms);
	}

	static setUtv(parms: HttpRequest<CreateUtvRequest>) {
		const utvUseCase = new CreateUtvUseCase(new UtvGateway());
		return utvUseCase.execute(parms);
	}
}
