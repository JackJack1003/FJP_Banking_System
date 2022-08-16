pragma solidity^0.5.0; 
import './Token.sol'; 

contract EthSwap {
    string public name = "EthSwap Instant Exchange"; 
    Token public token;
    uint public rate = 100;  
    
    event TokenPurchased(
        address account, address token, 
        uint amount, uint rate
    );
    constructor(Token _token) public 
    {   
        token = _token; 
    }

    function buyTokens() public payable {
        uint tokenAmount = msg.value * rate;  
        token.transfer(msg.sender, tokenAmount); 
        emit TokenPurchased(msg.sender, address(token), tokenAmount, rate); 
    }

    function sellTokens(uint _amount) public payable {
        uint etherAmount = _amount /rate;  
        require(address(this).balance>= etherAmount); 
        token.transferFrom( msg.sender,address(this), etherAmount); 
        msg.sender.transfer(etherAmount); 
    }
    function transferTokens(address _to, uint _amount) public payable {
        require(address(this).balance>= _amount); 
        token.transferFrom( msg.sender,_to, _amount); 
        msg.sender.transfer(_amount); 
        // token.transfer(_to, _amount); 
    }
    

}