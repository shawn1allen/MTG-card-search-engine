import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import './AdvancedSearch.css'

const AdvancedSearch = () => {
    return (
        <div className="body">
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4">
                        <Form.Label>Card Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Card Name"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                </Row>
                <Form.Group as={Col}>
                    <Form.Label>Colors</Form.Label>
                    {['checkbox'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                            <Form.Check
                                inline
                                type={type}
                                id={'White'}
                                label={'White'}
                            />
                            <Form.Check
                                inline
                                type={type}
                                id={'Blue'}
                                label={'Blue'}
                            />
                            <Form.Check
                                inline
                                type={type}
                                id={'Black'}
                                label={'Black'}
                            />
                            <Form.Check
                                inline
                                type={type}
                                id={'Red'}
                                label={'Red'}
                            />
                            <Form.Check
                                inline
                                type={type}
                                id={'Green'}
                                label={'Green'}
                            />
                            <Form.Check
                                inline
                                type={type}
                                id={'Colorless'}
                                label={'Colorless'}
                            />
                        </div>
                    ))}
                    <Form.Select aria-label="Default select example">
                        <option value="Exact">Exact colors selected</option>
                        <option value="Includes">Includes at least colors selected</option>
                        <option value="AtMost">At most the colors selected</option>
                    </Form.Select>
                </Form.Group>

                <Row className='mb-3'>

                </Row>
            </Form>
        </div>
    )
}

export default AdvancedSearch;