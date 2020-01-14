import leftControlUnitReducer from './reducer';
import {
  changeToolSize,
  changeTool,
  changeCanvasSize,
  changeFirstCanvasColor,
  changeSecondCanvasColor
} from './actions';

window.it('tool size must be resized', () => {
  const action = changeToolSize('3');
  const state = {
    activeToolSize: '1'
  };
  const newState = leftControlUnitReducer(state, action);

  window.expect(newState.activeToolSize).toBe('3');
});

window.it('the tool must change', () => {
  const action = changeTool('erase');
  const state = {
    activeTool: 'pen'
  };
  const newState = leftControlUnitReducer(state, action);

  window.expect(newState.activeTool).toBe('erase');
});

window.it('canvas size should change', () => {
  const action = changeCanvasSize('64');
  const state = {
    activeCanvasSize: '32'
  };
  const newState = leftControlUnitReducer(state, action);

  window.expect(newState.activeCanvasSize).toBe('64');
});

window.it('should change the first color of the canvas', () => {
  const action = changeFirstCanvasColor('#000000');
  const state = {
    activeFirstCanvasColor: '#ffffff'
  };
  const newState = leftControlUnitReducer(state, action);

  window.expect(newState.activeFirstCanvasColor).toBe('#000000');
});

window.it('should change the second color of the canvas', () => {
  const action = changeSecondCanvasColor('#ffffff');
  const state = {
    activeSecondCanvasColor: '#000000'
  };
  const newState = leftControlUnitReducer(state, action);

  window.expect(newState.activeSecondCanvasColor).toBe('#ffffff');
});
