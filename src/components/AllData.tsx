import React from 'react'
import {connect, ConnectedProps} from 'react-redux';
import { State } from '../interfaces/state';

const mapStateToProps = (state: State) => ({
	users: state.account
});

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

interface CardsProps {
	type: string
};

const AllData: React.FC<Props> = ({users}) => {
	const Cards = ({type}: CardsProps) => (
		<div className="card" style={{width: '22rem'}}>
			<div className="card-header">
				{type === 'email' ? 'Email' : type === 'name' ? 'Name' : 'Password'}
			</div>
			{users.length > 0 ? 
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						{users.length > 0 &&
							users.map(user => (
								<div className='alldata-text'>{user[type as keyof typeof user]}</div>
							))
						}
					</li>
				</ul>
				:
				<h5>No Users Currently</h5>
			}
		</div>
	)
	return (
		<div className='alldata-container'>
			<h1>All Data</h1>
			<div className='alldata-content'>
				<Cards type='email'/>
				<Cards type='name'/>
				<Cards type='password'/>
			</div>
		</div>
	)
}

export default connector(AllData);
