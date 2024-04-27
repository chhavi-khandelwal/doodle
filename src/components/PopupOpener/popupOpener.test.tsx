import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PopupOpener from '.';

describe('PopupOpener component', () => {
	test('renders correct button text based on popup state', () => {
		render(
			<PopupOpener>
				<div className='abc'>Chat Component</div>
			</PopupOpener>
		);

		expect(screen.getByText(/open chat/i)).toBeInTheDocument();

		fireEvent.click(screen.getByRole('button', { name: /toggle chat popup/i }));

		expect(screen.getByText(/close chat/i)).toBeInTheDocument();
	});
});
