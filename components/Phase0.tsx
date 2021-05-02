import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {
  ModalBodyProps, ListingType, ListingCategory, UserData,
  Check, PhaseProps,
} from './interfaces';
import cloneDeep from 'clone-deep';

function Phase0({ userData, userData: { phase0 }, setUserData }: PhaseProps): JSX.Element {
  const { listing, category } = phase0;
  const radios: Array<Check> = [
    { 
      label: 'Looking to Buy', 
      checked: listing === ListingType.Buy,
      value: ListingType.Buy,
    },
    {
      label: 'Looking to Sell',
      checked: listing === ListingType.Sell,
      value: ListingType.Sell,
    },
  ];
  const categoryNames = Object.keys(ListingCategory);
  const categories = categoryNames.map((category: string): Check => ({
    label: category,
    checked: phase0.category === ListingCategory[category],
    value: ListingCategory[category],
  }));
  function setter(stateName: string, newValue: any): void {
    let updated: UserData = cloneDeep(userData);
    updated.phase0[stateName] = newValue;
    setUserData(updated);
  };
  return (
    <Modal.Body>
      <Form>
        <Form.Group controlId="title">
          <Form.Label>Listing Title</Form.Label>
          <Form.Control
            type="string"
            placeholder={phase0.title || "Enter Title"}
            onChange={(event) => setter('title', event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="listing">
          <Form.Label>Type of Listing</Form.Label>
          <div>
            {radios.map((radio: Check): JSX.Element => (
              <Form.Check
                type="radio"
                name="listing"
                id={radio.label}
                label={radio.label}
                checked={radio.checked}
                onClick={(): void => { setter('listing', radio.value); }}
              />
            ))}
          </div>
        </Form.Group>

        <Form.Group controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control as="select" onChange={(e) => setter('category', e.target.value)}>
              <option value={ListingCategory.Null}>Select a category for your listing</option>
              {categories.map((cat) => (
                <option
                  value={cat.value}
                  selected={cat.checked}
                >
                  {cat.label}
                </option>
              ))}
          </Form.Control>
        </Form.Group>
      </Form>
    </Modal.Body>
  );
};

export default Phase0;
