import { render,screen } from "@testing-library/react"
import Forms from "./Forms"

test('Sample test', () => { render(<Forms/>)
    const sampletest = screen.getByTestId("form1")
})
