            FILTER

const data = useSelector(trucksSelector)
const [input, setInput] = useState(')
const [options, setOptions] = useState([])
const [type, setType] = useState(')

const [filteredData, setFilteredData] = useState(data)

const handleSearch = () => {
setFilteredData((prev) => prev.filter(card => options.every(el => Object.keys(card))))
setType((prev) => prev.filter(card => card.type === type))
}

| | | |
input options(multi) type(1 value) Search Btn
| | | handleSearch
state state state
string string[] string
