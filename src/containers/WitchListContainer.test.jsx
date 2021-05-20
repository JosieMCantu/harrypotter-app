import React from 'react';
import {screen, render, waitFor} from '@testing-library/react';
import WitchListContainer from '../containers/WitchListContainer';

describe('Harry Potter Witch Container', () => {
    it('shows a list of witches on the screen', async () => {
        render(<WitchListContainer/>)

        screen.getByText('Loading...')

        const ul = await screen.findByRole('list', {name: 'witches'})

        return waitFor(() => {
            expect(ul).not.toBeEmptyDOMElement()
        })
    })
})
