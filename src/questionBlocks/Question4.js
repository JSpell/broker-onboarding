import React, { Component } from 'react';
import { observer } from 'mobx-react';

import UiState from '../state/UiState';
import { YesNoToggle } from '../components/YesNoToggle';
import { QuestionSet } from '../components/QuestionSet';
import { questions } from '../constants/questions';

@observer
export class Question4 extends Component {
    render() {
        return (
            <QuestionSet 
                question={questions['4']}
                AnswerComponent={<YesNoToggle selectedValue={UiState.active_license} onChange={(val) => {UiState.active_license = val}}  />}
            />
        );
    }
}