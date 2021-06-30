# kruskal-count
Built for Numericana to demonstrate Kruskal's count

<a href="https://e-t-sudo.github.io/kruskal-count"><https://e-t-sudo.github.io/kruskal-count></a>

## Odds of success

The mathematical modelling of the system "is left as an exercise" ;)
  
I just used the good old brute force approach to arrive at a rough approximation for the likelihood of success in this simple demo of the Kruskal count. It basically works as follows :
  
`IS_SUCCESSFULL(card_sequence) {`<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Go through all the possible card choices(ten in total) that the user can make and their final results`<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Count the number of times the final result matches the predicted result`<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Calculate the odds of success in each stage`<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `if odds == 100%: `<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `return true`<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `else:`<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `return false`<br>
 `}`
 
Using the above function to check a large number of randomly generated card shuffles, following results were obtained: 
  
  <table>
    <thead><th>Number of shuffles checked</th><th>Shuffles which work for all card choices</th><th>Empirical probability of success</th></thead>
    <tbody>
      <tr><td>10</td><td>8</td><td>80%</td></tr>
      <tr><td>100</td><td>83</td><td>83%</td></tr>
      <tr><td>1,000</td><td>846</td><td>84.6%</td></tr>
      <tr><td>10,000</td><td>8,451</td><td>84.5%</td></tr>
      <tr><td>100,000</td><td>84,231</td><td>84.231%</td></tr>
    </tbody>
  </table>
  
  As the number of checks is increased, the average probability of a <b>certain success</b>(success of the event being independent of the intital card choices), comes out to be a little more than 84%. If we also take into account the occasional hits which are dependent on the card that is intitially picked, the odds shoot past the 90% mark, which is quite impressive for a self-working effect!
  
