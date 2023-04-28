import React from 'react';

const EditHero = props => {
  if (props.selectedHero) {
    return (
      <div>
        <div className="editfields">
          <div>
            <label>Number: </label>
            {props.addingHero
              ? <input
                  type="number"
                  name="id"
                  placeholder="id"
                  value={props.selectedHero.id}
                  onChange={props.onChange}
                />
              : <label className="value">
                  {props.selectedHero.id}
                </label>}
          </div>
          <div>
            <label>Name: </label>
            <input
              name="name"
              value={props.selectedHero.name}
              placeholder="name"
              onChange={props.onChange}
            />
          </div>
          <div>
            <label>Detail: </label>
            <input
              name="saying"
              value={props.selectedHero.saying}
              placeholder="detail"
              onChange={props.onChange}
            />
          </div>
        </div>
        <button onClick={props.onCancel}>Cancel</button>
        <button onClick={props.onSave}>Save</button>
      </div>
    );
  } else {
    return <div />;
  }
};

export default EditHero;