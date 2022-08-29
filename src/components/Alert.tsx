import React, { Fragment } from 'react';
import {Button, Modal} from 'react-bootstrap';
import { connect, ConnectedProps } from 'react-redux';
import {State} from '../interfaces/state';
import {removeAlert} from '../actions/alert';

const AlertModal: React.FC<HeaderProps> = (props) => {
	const {alert, removeAlert} = props;
	return (
		<Fragment>
			{alert.show &&
				<Modal show={alert.show} onHide={() => removeAlert()}>
					<Modal.Header style={{backgroundColor: `${alert.type === 'success' ? 'green' : 'red'}`, color: 'black'}} closeButton>
						
						<Modal.Title>{alert.title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>{alert.text}</Modal.Body>
					<Modal.Footer>
						<Button variant='secondary' onClick={() => removeAlert()}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
			}
		</Fragment>
	)
}


const mapStateToProps = (state: State) => ({
	alert: state.alert,
});

const connector = connect(mapStateToProps, {removeAlert});

type HeaderProps = ConnectedProps<typeof connector>;

export default connector(AlertModal);