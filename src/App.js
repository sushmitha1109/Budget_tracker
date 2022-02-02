import  Container  from 'react-bootstrap/Container';
import './App.css';
import {Button,Stack} from "react-bootstrap"
import BudgetCard from './components/BudgetCard';

function App() {
  return (
<Container>

<Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Budgets</h1>
          <Button variant="primary">
            Add Budget
          </Button>
          <Button variant="outline-primary">
            Add Expense
          </Button>
        </Stack>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
          <BudgetCard name="Groceries" amount={80} max={1000}>
            </BudgetCard>
        </div>
</Container>
  )
}

export default App

